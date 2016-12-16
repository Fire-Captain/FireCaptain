//holds all auth level wrappers
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsSudo = UserAuthWrapper({
	authSelector: state => state.user,
	redirectAction: routerActions.replace,
	failureRedirectPath: '/login',
	wrapperDisplayName: 'UserIsSudo',
	predicate: user => user.getIn(['permission', 'sudo']),
	allowRedirectBack: false
})

export const UserIsDistrict = UserAuthWrapper({
	authSelector: state => state.user,
	redirectAction: routerActions.replace,
	failureRedirectPath: '/login',
	wrapperDisplayName: 'UserIsDistrict',
	predicate: user => user.getIn(['permission', 'district']),
	allowRedirectBack: false
})

export const UserIsSchool = UserAuthWrapper({
	authSelector: state => state.user,
	redirectAction: routerActions.replace,
	failureRedirectPath: '/login',
	wrapperDisplayName: 'UserIsSchool',
	predicate: user => user.getIn(['permission', 'school']),
	allowRedirectBack: false
})

export const UserIsDrill = UserAuthWrapper({
	authSelector: state => state.user,
	redirectAction: routerActions.replace,
	failureRedirectPath: '/login',
	wrapperDisplayName: 'UserIsDrill',
	predicate: user => user.getIn(['permission', 'drill']),
	allowRedirectBack: false
})