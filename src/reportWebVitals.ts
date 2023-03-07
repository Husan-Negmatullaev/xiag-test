import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  /* Programmer commentary:
    * The check is not quite clear.
    * If you want to check if the passed argument is a function,
    * you should remove the onPerfEntry check and leave onPerfEntry instanceof Function
  */
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });

    /*
    * Programmer commentary:
    * I would change the call of this import to the following:
    * const reportWebVitals = async () => {
    *    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
    *    getCLS(onPerfEntry);
    *    getFID(onPerfEntry);
    *    getFCP(onPerfEntry);
    *    getLCP(onPerfEntry);
    *    getTTFB(onPerfEntry);
    * }
    * This will make the code more readable.
    * */
  }
};

export default reportWebVitals;
