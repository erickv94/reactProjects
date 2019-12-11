import React, {Component}  from 'react'
import LoaderSpinner from '../Components/LoaderSpinner';
const withLoader = (WrappedComponent,propValue) => {

    return class WithLoader extends Component {

        render() {
        return this.props[propValue].length!==0? <WrappedComponent {...this.props} />: <LoaderSpinner/>;
        }
     }
}

export default withLoader