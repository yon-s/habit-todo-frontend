import { faCalendarDays, faCircleUser ,faGear, faList, } from '@fortawesome/free-solid-svg-icons';

export const navs = [
  {'href': '/', 'icon': faList, 'text': 'TODAY'},
  {'href': '/record', 'icon': faCalendarDays, 'text': '記録'},
  {'href': '/task-setting', 'icon': faGear, 'text': 'タスク設定'},
  {'href': '/user', 'icon': faCircleUser, 'text': 'ユーザー'},
]
