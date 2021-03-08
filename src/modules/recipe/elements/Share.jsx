import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';

const Share = (props) => {
  return (
    <div className='my-2'>
      <h5 className='text-uppercase my-2'>Share</h5>

      <EmailShareButton url={window.location.href} subject={`Have you tried this recipe: "${props.strMeal}"?`} body={'Hi! I want to share this recipe with you: '} className='mr-1' >
        <EmailIcon  size={36} round={false} borderRadius={'10%'} />
      </EmailShareButton>

      <FacebookShareButton url={window.location.href} className='mr-1' >
        <FacebookIcon  size={36} round={false} borderRadius={'10%'} />
      </FacebookShareButton>

      <LinkedinShareButton url={window.location.href} className='mr-1' >
        <LinkedinIcon  size={36} round={false} borderRadius={'10%'} />
      </LinkedinShareButton>

      <PinterestShareButton url={window.location.href} className='mr-1' >
        <PinterestIcon  size={36} round={false} borderRadius={'10%'} />
      </PinterestShareButton>

      <TwitterShareButton url={window.location.href} className='mr-1' >
        <TwitterIcon  size={36} round={false} borderRadius={'10%'} />
      </TwitterShareButton>
    </div>
  )
};

export default Share;