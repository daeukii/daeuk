import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../components/Ccc/CommonTable';
import CommonTableColumn from '../../components/Ccc/CommonTableColumn';
import CommonTableRow from '../../components/Ccc/CommonTableRow';
import { postList } from '../../../src/Data';

const PostList = props => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(postList);
    }, [])

    return (
        <div>
            <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
                {
                    dataList ? dataList.map((item, index) => {
                        return (
                            <CommonTableRow key={index}>
                                <CommonTableColumn>{item.no}</CommonTableColumn>
                                <CommonTableColumn>
                                    <Link to={`/postView/${item.no}`}>{item.title}</Link>
                                </CommonTableColumn>
                                <CommonTableColumn>{item.createDate}</CommonTableColumn>
                                <CommonTableColumn>{item.readCount}</CommonTableColumn>
                            </CommonTableRow>
                        )
                    }) : ''
                }
            </CommonTable>
        </div>
    )
}

export default PostList;