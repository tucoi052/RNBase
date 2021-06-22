import { HeaderStyleInterpolators } from "@react-navigation/stack"
import React, { Component } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Layout from "components/Layout";
export const OPTS_COMMON = {
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  headerBackTitleVisible: false,

  headerBackImage: () => (
    <Layout paddingLeft={10} paddingRight={5} paddingVertical={5} >
      <Layout
        style={{ borderRadius: 30 }}
        centered
        middle
        height={33}
        width={33}
        color={'white'} >
        {/* <MySvg source="ic_back" fill={'black'} size={16} /> */}
      </Layout>
    </Layout>
  ),
};