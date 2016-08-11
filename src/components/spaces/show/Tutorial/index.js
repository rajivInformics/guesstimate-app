import React, {Component} from 'react'

import {ButtonClose} from 'gComponents/utility/buttons/close/index'

import Icon from 'react-fa'
import Modal from 'react-modal'

import MakeACell from '../../../../assets/tutorial/makeACell.gif'
import InteractWithACell from '../../../../assets/tutorial/InteractWithACell.gif'
import MakeAFunction from '../../../../assets/tutorial/MakeAFunction.gif'
import './style.css'

export const TutorialModal = ({onClose}) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(55, 68, 76, 0.4)'
    },
    content : {
      left: '20%',
      width: '60%',
      right: 'auto',
      top: '10%',
      height: '80%',
      bottom: 'auto',
      marginRight: '-50%',
      marginBottom: '-50%',
      backgroundColor: '#F0F0F0',
      border: 'none',
      padding: '1em'
    }
  }
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      <Tutorial onClose={onClose} />
    </Modal>
  )
}

const TutorialPageOne = () => (
  <div>
    <div className='row'>
      <div className='col-md-12'><h2>Cell Basics</h2></div>
    </div>
    <div className='row'>
      <div className='col-md-6'><img src={MakeACell} /></div>
      <div className='col-md-6'>
        <p>
          To create a cell, simply click on an empty spot in the grid. Clicking once will select the location, and twice
          will create the cell. Cells can be given names and values.
        </p>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-6'>
        You can drag a cell to move it, and you can delete a cell with 'backspace', 'delete', or by clicking the trash
        can icon in the toolbar while the cell is selected. You can cut, copy, and paste cells with ctrl-x, ctrl-c, and
        ctrl-v, respectively, or the icons in the toolbar.
      </div>
      <div className='col-md-6'><img src={InteractWithACell} /></div>
    </div>
  </div>
)

const TutorialPageTwo = () => (
  <div>
    <div className='row'>
      <div className='col-md-12'><h2>Functions</h2></div>
    </div>
    <div className='row'>
      <div className='col-md-6'><img src={MakeAFunction} /></div>
      <div className='col-md-6'>
        To make a function that uses multiple other cells, simply start the value field of a cell with an '=' sign.
        Variable names will appear on the other cells in your spreadsheet, and you can use them as inputs either by
        typing those two letter codes or by clicking on the cell directly.
      </div>
    </div>
    <div className='row'>
      <div className='col-md-6'>
        As well as the standard mathematical operators, functions can contain trigonometric functions, financial
        functions, ternary if statements, and statistical distributions.
      </div>
      <div className='col-md-6'>Image</div>
    </div>
  </div>
)

const TutorialPageThree = () => (
  <div>
    <div className='row'>
      <div className='col-md-12'><h2>{'Ranges \& Data'}</h2></div>
    </div>
    <div className='row'>
      <div className='col-md-6'>Image</div>
      <div className='col-md-6'>Text</div>
    </div>
    <div className='row'>
      <div className='col-md-6'>Text</div>
      <div className='col-md-6'>Image</div>
    </div>
  </div>
)

const TutorialPageFour = () => (
  <div>
    <div className='row'>
      <div className='col-md-12'><h2>Advanced Features</h2></div>
    </div>
    <div className='row'>
      <div className='col-md-6'>Image</div>
      <div className='col-md-6'>Text</div>
    </div>
    <div className='row'>
      <div className='col-md-6'>Text</div>
      <div className='col-md-6'>Image</div>
    </div>
  </div>
)

class Tutorial extends Component {
  static PAGES = [
    <TutorialPageOne />,
    <TutorialPageTwo />,
    <TutorialPageThree />,
    <TutorialPageFour />,
  ]

  state = {
    onPage: 0
  }

  previousPage() { this.setState({onPage: Math.max(this.state.onPage - 1, 0)}) }
  nextPage() { this.setState({onPage: Math.min(this.state.onPage + 1, 4)}) }
  renderPage() { return Tutorial.PAGES[this.state.onPage] }

  render() {
    return (
      <div className='tutorial'>
        <div className='row'>
          <div className='col-md-11'><span className='title'>Tutorial</span></div>
          <div className='col-md-1'><ButtonClose onClick={this.props.onClose}/></div>
        </div>
        <div className='pageContainer'>{this.renderPage()}</div>
        <div className='actions'>
          <div className='row'>
            <div className='col-md-3' />
            <div className='col-md-9'>
              <span className='progress'> {this.state.onPage + 1} / 4 </span>
              <span
                className={`ui button ${this.state.onPage === 0 ? 'disabled' : ''}`}
                onClick={this.previousPage.bind(this)}
              >
                <Icon name='arrow-left'/> Previous
              </span>
              <span
                className={`ui button ${this.state.onPage === 3 ? 'disabled' : ''}`}
                onClick={this.nextPage.bind(this)}
              >
                <Icon name='arrow-right'/> Next
              </span>
              <span
                className='ui button'
                onClick={this.props.onClose}
              >
                Skip
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
