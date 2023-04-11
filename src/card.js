export var Card = (props) => {
  return (
    <>
      <img
        src='https://source.unsplash.com/jPmurJKSL_0/600x800'
        style={{ width: '100%' }}
        alt='beach'
      />
      <div
        style={{
          color: '#685B38',
          backgroundColor: 'white',
          padding: 20,
          fontFamily: 'ITC Garamond',
          fontSize: '14pt',
        }}
      >
        {props.title}, {props.label}
        <br />
        {props.copy}
      </div>
    </>
  )
}
