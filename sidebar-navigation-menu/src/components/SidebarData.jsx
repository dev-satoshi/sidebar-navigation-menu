import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData = [
  {
    title: 'ホーム',
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    title: 'メール',
    icon: <MailIcon />,
    link: '/mail',
  },
  {
    title: 'アナリティクス',
    icon: <AssessmentIcon />,
    link: '/analytics',
  },
  {
    title: '友達追加',
    icon: <PersonAddIcon />,
    link: '/friends',
  },
  {
    title: 'お支払い設定',
    icon: <CreditCardIcon />,
    link: '/payment',
  },
  {
    title: 'アップロード',
    icon: <CloudUploadIcon />,
    link: '/upload',
  },
  {
    title: '詳細設定',
    icon: <SettingsIcon />,
    link: '/settings',
  },
]