import React from "react"

const PasswordStr = (props) => {
  const { strColor, strWidth } = props

  switch (props.score) {
    case 1:
      strColor = "red"
      strWidth = "20%"
      break
    case 2:
      strColor = "orange"
      strWidth = "40%"
      break
    case 3:
      strColor = "yellow"
      strWidth = "60%"
      break
    case 4:
      strColor = "#5cff47"
      strWidth = "80%"
      break
    case 5:
      strColor = "green"
      strWidth = "100%"
      break
  }

  return (
    <div>
      <p>weak</p>
      <p>strong</p>
    </div>
  )
}

export default PasswordStr
