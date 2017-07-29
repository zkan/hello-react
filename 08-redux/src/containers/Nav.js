import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { addItem } from '../actions/item'

const mapStateToProps = (state) => ({
  number_of_items: state.items.length,
})

export default connect(mapStateToProps)(Nav)
