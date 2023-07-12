import React, { useState, useEffect, useRef, Fragment } from 'react';
import propsTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import { useAppDispatch } from '../../redux/store';
// import { getCSVData } from '../../redux/features/projects/thunks';
// import useDebounce from '../../utils/hooks/useDebounce/useDebounce';

const CsvExport = ({ children, disable }: any) => {

  const dispatch = useAppDispatch();
  const [csvData, setCsvData]: any = useState([]);

  // useDebounce(() => , 1000, [])

  const csvInstanceEl: any = useRef();
  useEffect(() => {
    if (csvData && csvInstanceEl.current && csvInstanceEl.current.link && csvData.length > 0) {
      setTimeout(() => {
        csvInstanceEl.current.link.click();
        setCsvData(false);
      });
    }
  }, [csvData]);
  return (
    <Fragment>
      <div 
        // onClick={async () => {
        //   if (disable ) {
        //     return;
        //   }
        //   const { payload }: any = await dispatch(getCSVData({ page: 0, itemsPerPage: 999 }))
        //   setCsvData(payload)
        // }}
      >
        {children}
      </div>
      {csvData ?
        <CSVLink
          data={csvData}
          // headers={csvData.headers}
          filename={"projects"}
          ref={csvInstanceEl}
        />
        : undefined}
    </Fragment>

  );
};

export default CsvExport;

CsvExport.defaultProps = {
  children: undefined,
  asyncExportMethod: () => null,
  disable: false,
};

CsvExport.propTypes = {
  children: propsTypes.node,
  asyncExportMethod: propsTypes.func,
  disable: propsTypes.bool,
};