function ProfileCard({title, handle, image}) {
  // const title = props.title
  // const handle = props.handle

  // const {title, handle} = props
  return <div className='card'>
  <div className="card-image">
    <figure class='image is-1by1'>
      <img src={image} alt='logo'/>
    </figure>
  </div>
  <div className="card-content">
  <div className="media-content">
  <p class='title is-4'>{title}.</p>
  <p class='subtitle is-6'>{handle}.</p>
</div>
  </div>
  </div>
}

export default ProfileCard