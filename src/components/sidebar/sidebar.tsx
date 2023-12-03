import { FC } from 'react'
import { cn } from '@bem-react/classname'
import { User, Hash, Key, MessageSquare, Settings, Star, Clock, Lock } from 'react-feather'
import { Link } from 'react-router-dom'

import './sidebar.scss'

const CnSidebar = cn('sidebar')

export const Sidebar: FC = () => {
    return (
        <div className={CnSidebar()}>
            <div className={CnSidebar('logo')}>
                <svg
                    width="180"
                    height="173"
                    viewBox="0 0 180 173"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M87.6702 1.57708C85.4492 2.51223 82.0593 4.73321 80.3059 6.48662C77.5005 9.17517 55.5245 52.0751 53.1866 59.3226C52.4852 61.5435 53.0697 61.6604 70.37 61.6604H88.3716L92.2291 53.8286L96.0866 45.8798L100.061 53.8286L104.035 61.6604H114.906C120.751 61.6604 128.934 62.3618 133.025 63.2969C140.155 64.6997 140.272 64.6997 139.571 62.3618C137.701 56.5171 114.205 9.40896 111.867 6.8373C105.906 0.408144 95.619 -1.81284 87.6702 1.57708Z" />
                    <path
                        d="M0 69.4923C0.116894 71.1288 7.48119 80.0127 11.3387 83.1688C13.3259 84.9222 18.1185 87.7277 21.8591 89.4811L28.6389 92.6372L94.6838 93.3386C131.038 93.6893 160.962 93.8062 161.196 93.5724C162.131 92.871 154.884 83.6364 150.91 80.2465C148.572 78.3762 143.779 75.337 140.272 73.7005C133.843 70.5443 133.609 70.5443 98.7751 69.7261C50.3811 68.5571 0 68.4402 0 69.4923Z"
                        fill="#17c57d"
                    />
                    <path d="M7.0136 100.937C7.0136 102.807 15.5468 113.094 19.2874 115.548C21.5084 117.068 23.3787 118.705 23.3787 119.055C23.3787 119.406 20.807 125.367 17.534 132.264C9.35147 149.798 9.70215 158.331 19.0536 166.514C24.3138 171.19 30.5092 173.177 36.4708 172.242C43.952 171.073 45.7054 169.67 44.4195 166.163C42.1986 160.436 43.2506 155.877 50.6149 140.213L57.8623 124.549L85.683 125.017C107.659 125.484 113.387 125.251 113.387 124.082C113.387 120.809 101.347 109.587 93.7486 105.846C86.1506 102.106 85.7999 101.989 63.8239 101.287C34.6005 100.235 7.0136 100.002 7.0136 100.937Z" />
                    <path d="M123.907 102.456C123.907 103.041 128.934 113.912 135.129 126.653C147.052 151.552 148.221 155.877 144.597 163.007C142.376 167.215 142.961 168.034 149.974 170.956C160.495 175.281 172.184 170.605 177.795 159.617C181.886 151.552 180.951 147.577 169.262 123.497L158.625 101.404H141.207C131.739 101.404 123.907 101.872 123.907 102.456Z" />
                </svg>
                Aleo <b>Hooks</b>
            </div>

            <div className={CnSidebar('navigation')}>
                <Link to="/useConnect" className={CnSidebar('navigationItem')}>
                    <User />
                    useConnect
                </Link>
                <Link to="/" className={CnSidebar('navigationItem')}>
                    <Hash />
                    useDecrypt
                </Link>
                <Link to="/useViewKey" className={CnSidebar('navigationItem')}>
                    <Key />
                    useViewKey
                </Link>
                <Link to="/useSignMessage" className={CnSidebar('navigationItem')}>
                    <MessageSquare />
                    useSignMessage
                </Link>
                <Link to="/useTransaction" className={CnSidebar('navigationItem')}>
                    <Settings />
                    useTransaction
                </Link>
                <Link to="/useTransactionStatus" className={CnSidebar('navigationItem')}>
                    <Star />
                    useTransactionStatus
                </Link>
                <Link to="/useWait" className={CnSidebar('navigationItem')}>
                    <Clock />
                    useWait
                </Link>
                <Link to="/useRecords" className={CnSidebar('navigationItem')}>
                    <Lock />
                    useRecords
                </Link>
            </div>
        </div>
    )
}
