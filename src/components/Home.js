import React from 'react';
import TimeAgo from 'react-timeago'
import Button from 'antd/lib/button';

export const Home = () => (
    <div>
        <h2>Home</h2>
        <TimeAgo date="Aug 29, 2019" />
        <Button type="danger">Hello world</Button>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        {/*<SearchBox/>*/}
    </div>
)