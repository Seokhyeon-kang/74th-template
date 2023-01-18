import { useRoutes } from 'react-router-dom';

// routes
import AuthenticationRoutes from './AuthenticationRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import RootRoute from "../root/RootRoute";
import BasicInfoRoute from "../erp/logistic/base/route/BasicInfoRoute";
import LogiRootRoute from "../erp/logistic/root/RootRoute";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([LoginRoutes, AuthenticationRoutes, MainRoutes, ...RootRoute]);
}

// 오타 수정 : AuthenticationRotes -> AuthenticationRoutes(import부분도 수정 완료!)


// ㅇㄹㄶㄴㅇㅎㄴㅇ런ㅇ'란ㅇ;ㅣㄹㅇㄹㄴ마ㅣㄹ;ㅓ니아ㅓ리나얼ㄴ이;런;ㅣㄹ

