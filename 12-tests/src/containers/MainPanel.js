import { connect } from 'react-redux'
import MainPanel from '../components/MainPanel'
import { addItem } from '../actions/item'

const mapStateToProps = (state) => ({
  todo: state,
})

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel)
