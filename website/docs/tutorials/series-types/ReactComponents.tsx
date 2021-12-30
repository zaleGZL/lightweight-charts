import React, { useRef, useState, useEffect } from "react";
import { createChart, IChartApi, SeriesType } from 'lightweight-charts';

type nonOHLCDataType = {
    time: string;
    value: number;
};

type ohlcDataType = {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
};

export type chartDataType = nonOHLCDataType | ohlcDataType;

export const CodeComponent = (options: { typeOfChart: SeriesType, seriesType: string }) => {
	const { seriesType, typeOfChart } = options;

	const code = `
		// Here's a piece of code that could be placed in a separate file like 'ChartComponent.tsx'
		export const ChartComponent = (options: { data }) => {
			const chart = createChart(containerId, {
				width: 400,
				height: 300,
				rightPriceScale: {
					visible: true
				},
			});

			const series = chart.${seriesType}();
			series.setData(data);
		}

		// When used as a component, you could 'import' your component into another one
		import { ChartComponent } from './ChartComponent';

		...
		export const MyNewComponent = () => {
			// Careful as for some type data would have to be OHLC formatted as in
			// { time: '2018-12-22', open: 162.81, high: 167.96, low: 160.17, close: 160.48 }
			const myData = [
				{ time: '2018-12-22', value: 32.51 },
				{ time: '2018-12-23', value: 31.11 },
				{ time: '2018-12-24', value: 27.02 },
				{ time: '2018-12-25', value: 27.32 },
				{ time: '2018-12-26', value: 25.17 },
				{ time: '2018-12-27', value: 28.89 },
				{ time: '2018-12-28', value: 25.46 },
				{ time: '2018-12-29', value: 23.92 },
				{ time: '2018-12-30', value: 22.68 },
				{ time: '2018-12-31', value: 22.67 },
			];

			return (
				<ChartComponent typeOfChart={'${typeOfChart}'} data={myData} />
			);
		};
	`;

	return (
		<>
			<label>
				This is the piece of code used to render that chart
				<textarea readOnly cols={110} rows={40} value={code}/>
			</label>
		</>
    );
};

export const ChartComponent = (options: { typeOfChart: SeriesType, data: chartDataType[] }) => {
	const { typeOfChart, data } = options;

	const chartContainerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	const [seriesType, setSeriesType] = useState<string|null>(typeOfChart);
	const [chart, setChart] = useState<IChartApi>();

	useEffect(() => {
		if (chartContainerRef.current !== undefined) {
			chartContainerRef.current.innerHTML = '';

			setSeriesType(null);
		}
	}, [typeOfChart]);

	useEffect(() => {
		if (chartContainerRef.current !== undefined && chart !== undefined) {
			const handleResize = () => {
				chart?.resize(chartContainerRef.current.clientWidth, chartContainerRef.current.clientHeight);
			}
		
			window.addEventListener('resize', handleResize);
	
			return () => window.removeEventListener('resize', handleResize);
		}
	}, [chart]);

	useEffect(() => {
		if (chartContainerRef.current !== undefined && seriesType === null) {
			const chart = createChart(chartContainerRef.current, {
				width: 400,
				height: 300,
				rightPriceScale: {
					visible: true
				},
			});

			setChart(chart);

			let series;
			switch(typeOfChart) {
				case 'Area':
					series = chart.addAreaSeries();
					setSeriesType('addAreaSeries');
					break;

				case 'Bar':
					series = chart.addBarSeries();
					setSeriesType('addBarSeries');
					break;

				case 'Baseline': 
					series = chart.addBaselineSeries();
					setSeriesType('addBaselineSeries');
					break;

				case 'Candlestick': 
					series = chart.addCandlestickSeries();
					setSeriesType('addCandlestickSeries');
					break;

				case 'Histogram': 
					series = chart.addHistogramSeries();
					setSeriesType('addHistogramSeries');
					break;

				case 'Line': 
					series = chart.addLineSeries();
					setSeriesType('addLineSeries');
					break;

				default: break;
			}

			if (series !== undefined) {
				series.setData(data);
			}
		}
	}, [seriesType, data, typeOfChart]);

	return (
		<>
			<div className='chart' style={{
				'display': 'flex',
				'flexDirection': 'column',
				'flexWrap': 'nowrap',
				'justifyContent': 'space-around',
				'alignItems': 'flex-start',
			}}>
				<div style={{
					'display': 'flex',
					'flexDirection': 'column',
					'flexWrap': 'nowrap',
					'justifyContent': 'space-around',
					'alignItems': 'center',
				}}>
					<label htmlFor="chartType-select">This is the generated {typeOfChart} chart</label>	
					<div 
						ref={chartContainerRef} 
						className="chart-container" 
						style={{
							'margin': '20px'
						}} 
					/>
				</div>
				<div className='details' style={{
					'display': 'flex',
					'flexDirection': 'row',
					'alignItems': 'flex-start',
				}}>
					<CodeComponent typeOfChart={typeOfChart} seriesType={seriesType} />
				</div>
			</div>
		</>
    );
};


