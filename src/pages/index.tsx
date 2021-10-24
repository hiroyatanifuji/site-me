import React from 'react';
import { NextPage } from 'next';
import TopPageComponent, { getStaticProps as getStaticPropsFunction } from '../components/page';

type Props = React.ComponentProps<typeof TopPageComponent>;

const Home: NextPage<Props> = props => <TopPageComponent {...props} />;

export const getStaticProps = getStaticPropsFunction;

export default Home;
