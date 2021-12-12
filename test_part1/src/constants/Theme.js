import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const H1 = wp('100%') * 0.072;

const sizes = {
  height: (e, sub = 0) => hp(`${e}%`) - sub,
  width: (e, sub = 0) => wp(`${e}%`) - sub,

  //Device size
  device_width: wp('100%'),
  device_height: hp('100%'),

  H1,
  H14: wp('100%') * 0.036,
  H12: wp('100%') * 0.03,
  H13: wp('100%') * 0.033,
  H16: wp('100%') * 0.04,
  H18: wp('100%') * 0.046,

  padding: wp('100%') * 0.04,
};
const colors = {
  green: '#33AC2E',
  red: '#BE1F24',
  dark: '#000000',
  gray: '#BFC5D2',
  border: '#D6DDF6',
  backgroundHeader: '#C1332A',
  primaryText: '#FFFFFF',
  backgroundColorInputText: 'rgba(255, 255, 255, 0.2)',
  backgroundColor: '#EDEDED',
};

const fonts = {
  fontTitle: {
    fontWeight: 'bold',
    fontSize: sizes.width(8),
  },
};

const styles = StyleSheet.create({
  styleBtnRed: {
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleBtnWhite: {
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default {colors, sizes, fonts, styles};
