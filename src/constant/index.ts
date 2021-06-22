
export const nameRegExp = /\S/;
export const nameLimitExp = /^.{2,50}$/;
export const firstNameExp = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
export const phoneNumberExp = /^[0-9]{5,12}$/;
export const emailRegExp = /\S+@\S+\.\S+/;
export const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const RouteName = {
	LOGIN:"LOGIN",
	SIGN_UP:"SIGNUP",
	INTRO:"INTRO",
	APP:"APP",
	HOME:'HOME',
	SPLASH: 'SPLASH',
	
}
export const FieldName = {
	EMAIL: "EMAIL",
	PASSWORD:"PASSWORD",
	RE_PASSWORD:"RE_PASSWORD",
	ADDRESS:'ADDRESS',
	PHONENUMBER:'PHONENUMBER',
	REGISTER:'REGISTER',
	FULLNAME: 'FULLNAME',
	BIRTHDAY:'BIRTHDAY',
	PASSPORT: 'PASSPORT',
	GENDER:'GENDER',
	ORGANIZATION:'ORGANIZATION',
	TAX:'TAX',
	AGENT:'AGENT'
}
export const AppPlaceHolder = {
	PLACE_HOLDER_EMAIL:'PLACE_HOLDER_EMAIL',
	PLACE_HOLDER_PASSWORD: 'PLACE_HOLDER_PASSWORD',
	PLACE_HOLDER_RE_PASSWORD: 'PLACE_HOLDER_RE_PASSWORD',
}
export const AppValidation = {


}

