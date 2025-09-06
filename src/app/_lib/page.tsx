
//? _lib is private folder u cannot access them
//! You can also use %5f instead of _

//? if u try to access this page it will show error message
//? because nextjs do not allow to access private folder on browser

export default function PrivateFile(){
  return <h1>You cannot view this  on browser</h1>
}