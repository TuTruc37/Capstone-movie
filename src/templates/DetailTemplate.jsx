// import { Header } from 'antd/es/layout/layout';
import React from 'react'
import Detail from '../component/page/DetailPage/Detail';
import Fooder from '../layout/Fooder/Fooder';
import Header from '../layout/Header/Header'
const DetailTemplate = () => {
    return (
          <div className="bg-black">
            <Header />
            <Detail />
            <Fooder />
          </div>
        );
}

export default DetailTemplate