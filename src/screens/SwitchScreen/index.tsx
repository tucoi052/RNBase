import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApplicationState } from 'store/configureAction';
import { AuthStack } from 'navigation/stackAuthNavigation';
import { TabContainer } from 'navigation/tabNavigation';

interface State {

}
type UIProps = State;
const SwitchScreen = (props: UIProps) => {
  const ScreenRender = () => {

    if (true) {
      return <TabContainer />;
    }
  };
  return (
    <>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
      <View style={{ flex: 1 }}>
        {ScreenRender()}
      </View>
    </>
  );
};
const mapStateToProps = (state: ApplicationState) => ({
});
const mapDispatchToProps = {
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SwitchScreen as any);
