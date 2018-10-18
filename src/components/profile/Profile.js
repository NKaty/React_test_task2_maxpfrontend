import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadProfile } from '../../ac'
import Loader from '../common/Loader'
import {
  profileCitySelector,
  profileLanguagesSelector,
  profileSocialSelector,
  profileLoadingSelector
} from '../../selectors'
import withErrorHandler from '../../hoc/errors/withErrorHandler'

import vk from './socialIcon/vk.png'
import telegram from './socialIcon/telegram.png'
import web from './socialIcon/web.png'
import youtube from './socialIcon/youtube.png'
import twitter from './socialIcon/twitter.png'
import twitch from './socialIcon/twitch.png'

import './style.css'

const socialList = {
  vk: vk,
  telegram: telegram,
  web: web,
  youtube: youtube,
  twitter: twitter,
  twitch: twitch
}

class Profile extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props
    if (fetchData) fetchData()
  }

  render() {
    const { city, languages, social, loading } = this.props
    if (loading) return <Loader />
    return (
      <div className="profile">
        <h1 className="profile__title">Profile</h1>
        <p className="profile__item">
          City: <span>{city}</span>
        </p>
        <p className="profile__item">Knowledge of languages:</p>
        <ul className="profile__languages">
          {languages.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="profile__item">Links:</p>
        <ul className="profile__social">
          {social.map(item => (
            <li className="profile__social__item" key={item.label}>
              <a href={item.link} target="_blank">
                <img src={socialList[item.label]} alt={item.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: profileCitySelector(state),
    languages: profileLanguagesSelector(state),
    social: profileSocialSelector(state),
    loading: profileLoadingSelector(state)
  }
}

Profile.propTypes = {
  // from connect
  city: PropTypes.string,
  languages: PropTypes.array.isRequired,
  social: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  fetchData: PropTypes.func
}

export default withErrorHandler(
  connect(
    mapStateToProps,
    { fetchData: loadProfile }
  )(Profile)
)
