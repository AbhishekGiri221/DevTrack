function CurrentDate() {
    return(
        <>
      <p>{new Date().toLocaleDateString()}</p>
        </>
    )
}

export default CurrentDate;