import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'

import './index.scss'
export const SocialShare = ({ url, title }) => (
  <div className="social-share">
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>

    <TelegramShareButton url={url} title={title}>
      <TelegramIcon size={32} round={true} />
    </TelegramShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={32} round={true} />
    </WhatsappShareButton>
  </div>
)

export default SocialShare
