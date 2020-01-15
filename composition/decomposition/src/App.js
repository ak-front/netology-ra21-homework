import React from 'react';

import Logo from './components/Logo';
import NewsTabs from './components/NewsTabs';
import PromotionWidget from './components/PromotionWidget';
import Search from './components/Search';
import Banner from './components/Banner';
import ListWidget from './components/ListWidget';
import Stocks from './components/Stocks';
import Weather from './components/Weather';
import Widget from './components/Widget';

import './App.css';

function App() {
  return (
    <div className="index-page">
      <div className="index-page__top">
        <div className="index-page__top-left">
          <NewsTabs
            items={[
              {
                label: 'Сейчас в СМИ',
                news: [
                  {
                    id: 1,
                    icon: '',
                    text: 'Новость 1',
                    url: 'url1'
                  },
                  {
                    id: 2,
                    icon: '',
                    text: 'Новость 2',
                    url: 'url2'
                  }
                ]
              },
              {
                label: 'в Германии',
                news: []
              },
              {
                label: 'Рекомендуем',
                news: []
              }
            ]}
          />
          <Stocks items={[
            {
              delta: '+0,09',
              id: 1,
              label: 'USD MOEX',
              value: '63,52',
              url: '#'
            },
            {
              delta: '+0,14',
              id: 2,
              label: 'EUR MOEX',
              value: '70,86',
              url: '#'
            },
            {
              delta: '+1,63%',
              id: 3,
              label: 'НЕФТЬ',
              value: '64,90',
              url: '#'
            }
          ]} />
        </div>
        <div className="index-page__top-right">
          <PromotionWidget
            text="Смотрите на Яндексе и запоминайте"
            title="Работа над ошибками"
            url="#"
          />
        </div>
      </div>
      <div className="index-page__search">
        <div className="index-page__search-left">
          <Logo
            img={{
              src: 'https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg',
              alt: 'Яндекс'
            }}
          />
        </div>
        <div className="index-page__search-right">
          <Search
            tabs={[
              {
                label: 'Видео',
                url: '#'
              },
              {
                label: 'Картинки',
                url: '#'
              },
              {
                label: 'Новости',
                url: '#'
              },
              {
                label: 'Карты',
                url: '#'
              },
              {
                label: 'Маркет',
                url: '#'
              },
              {
                label: 'Переводчик',
                url: '#'
              },
              {
                label: 'Эфир',
                url: '#'
              },
              {
                label: 'ещё',
                url: '#'
              }
            ]}
            sample="Фаза луны сегодня"
          />
        </div>
      </div>
      <div className="index-page__middle">
        <div className="index-page__banner">
          <Banner
            img="https://via.placeholder.com/728x90.png?text=Banner"
            link="#"
          />
        </div>
        <div className="index-page__widgets">
          <div className="index-page__widgets-col">
            <Widget
              link="#"
              title="Погода"
            >
              <Weather
                link="#"
                icon="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cdefs%3E%3CradialGradient cx='88.2%25' cy='11.31%25' fx='88.2%25' fy='11.31%25' r='51.28%25' gradientTransform='matrix(0 -.975 1 0 .77 .97)' id='a'%3E%3Cstop stop-color='%239699C7' offset='0%25'/%3E%3Cstop stop-color='%239499C9' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='8.17%25' cy='-6.53%25' fx='8.17%25' fy='-6.53%25' r='65.22%25' gradientTransform='matrix(0 -.975 1 0 .15 .01)' id='b'%3E%3Cstop stop-color='%239699C7' offset='0%25'/%3E%3Cstop stop-color='%239499C9' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='c'%3E%3Cstop stop-color='%23A4C5F4' offset='0%25'/%3E%3Cstop stop-color='%23A7C7F2' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='88.2%25' cy='9.46%25' fx='88.2%25' fy='9.46%25' r='49.38%25' gradientTransform='matrix(0 -.975 1 0 .79 .95)' id='d'%3E%3Cstop stop-color='%23486DA8' offset='0%25'/%3E%3Cstop stop-color='%23486DA8' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='14.44%25' cy='0%25' fx='14.44%25' fy='0%25' r='51.28%25' gradientTransform='matrix(0 -.975 1 0 .14 .14)' id='e'%3E%3Cstop stop-color='%23486DA8' offset='0%25'/%3E%3Cstop stop-color='%23486DA8' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='122.37%25' id='f'%3E%3Cstop stop-color='%23A4C5F4' offset='0%25'/%3E%3Cstop stop-color='%23A7C7F2' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(3 6.55)'%3E%3Cellipse fill='url(%23a)' opacity='.2' cx='7.5' cy='12.31' rx='6' ry='6.15'/%3E%3Cellipse fill='url(%23b)' opacity='.2' cx='23.25' cy='14.62' rx='3.75' ry='3.85'/%3E%3Cpath d='M7.5 18.46c-3.31 0-6-2.75-6-6.15 0-3.4 2.69-6.16 6-6.16a6 6 0 0 1 1.8.28 6.78 6.78 0 0 1 6.45-4.9 6.84 6.84 0 0 1 6.67 8 4.4 4.4 0 0 1 1.58-.3c2.49 0 4.5 2.07 4.5 4.62a4.56 4.56 0 0 1-4.5 4.61H7.5z' fill='url(%23c)'/%3E%3Cellipse fill='url(%23d)' opacity='.34' cx='7.5' cy='12.31' rx='6' ry='6.15'/%3E%3Cellipse fill='url(%23e)' opacity='.2' cx='24' cy='13.85' rx='4.5' ry='4.62'/%3E%3Cellipse fill='url(%23f)' cx='15.75' cy='8.46' rx='6.75' ry='6.92'/%3E%3C/g%3E%3Cpath d='M14.2 28.63l-1.57 3.75m9.07-5.25l-1.57 3.75' stroke='%2366AFEB' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E "
                temp="+17°"
                forecast={['Утром +17', 'днём +20']}
              />
            </Widget>
            <ListWidget
              items={[
                {
                  id: 1,
                  text: 'о сталинках',
                  title: 'Недвижимость',
                  link: '#'
                },
                {
                  id: 2,
                  text: 'люстры и светильники',
                  title: 'Маркет',
                  link: '#'
                },
                {
                  id: 3,
                  text: 'привод 4x4 до 500 000',
                  title: 'Авто.ру',
                  link: '#'
                }
              ]}
              link="#"
              title="Посещаемое"
            >
              {items => (
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      <a href={item.link}>
                        <b>{item.title}</b> - {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </ListWidget>
          </div>
          <div className="index-page__widgets-col">
            <Widget
              link="#"
              title="Карта Германии"
            >
              <a href="#">Расписания</a>
            </Widget>
            <ListWidget
              items={[
                {
                  id: 1,
                  link: '#',
                  time: '02:00',
                  name: 'ТНТ. Best',
                  channel: 'ТНТ International'
                },
                {
                  id: 2,
                  link: '#',
                  time: '02:15',
                  name: 'Джинглики',
                  channel: 'Карусель INT'
                },
                {
                  id: 3,
                  link: '#',
                  time: '02:25',
                  name: 'Наедине со всеми',
                  channel: 'Первый'
                }
              ]}
              link="#"
              title="Телепрограмма"
            >
              {items => (
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      <a href={item.link}>
                        <span>{item.time}</span>
                        <span>{item.name}</span>
                        <span>{item.channel}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </ListWidget>
          </div>
          <div className="index-page__widgets-col">
            <ListWidget
              items={[
                {
                  id: 1,
                  link: "#",
                  info: 'Успех',
                  title: 'Управление как искусство'
                },
                {
                  id: 2,
                  link: "#",
                  info: 'earthTV',
                  title: 'Ночь. Мир в это время'
                },
                {
                  id: 3,
                  link: "#",
                  info: 'Совершенно секретно',
                  title: 'Андрей Возн...'
                }
              ]}
              link="#"
              title="Эфир"
            >
              {items => (
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      <a href={item.link}>
                        {item.title}
                        {item.info}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </ListWidget>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
