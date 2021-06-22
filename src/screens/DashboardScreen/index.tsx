import Label from 'components/Label';
import Layout from 'components/Layout';
import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApplicationState } from 'store/configureAction';
import styled from 'styled-components/native';

interface State {
}
type UIProps = State;

const HomeLayout = (props: UIProps) => {
    return (
        <Layout flex centered middle>
            <Label>DASHBOARD</Label>
        </Layout>
    )

};
const mapStateToProps = (state: ApplicationState) => ({
});
const mapDispatchToProps = {
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeLayout as any);