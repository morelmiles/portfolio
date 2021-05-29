import React from 'react';
import { Switch, Route } from 'react-router';
import BlogPage from './pages/Blog';
import HomePage from './pages/HomePage';
import { Helmet } from 'react-helmet';

<Helmet>
    <meta name="title" content="Luigi Morel" />
    <meta
        name="keywords"
        content="Blockchain, product development, software development, product design, Uganda, Kampala web developers, "
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="1 days" />
    <meta name="author" content="Luigi Morel" />

    <meta
        name="description"
        content="Luigi Morel is a developer who is passionate about coding and best practices, startups and product design and a firm believer in the blockcahin technology. "
    />
</Helmet>;
const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/blog" component={BlogPage} />
            </Switch>
        </>
    );
};

export default App;
