const wrapper = document.querySelector('.wrapper')
const buttons = document.querySelectorAll('button')
const blocks = document.querySelectorAll('.block-item')



const moveEl = (action, el, index) => {
  console.log(index);
  if (action === 'down') {
    wrapper.append(wrapper.children[index])
    wrapper.append(wrapper.children[index + 2])

    
  }

}

buttons.forEach((item, key) => {


  item.addEventListener('click', (event) => {
    const actionType = item.getAttribute('data-action')
    const childBlockInd = item.getAttribute('data-block')
    const parent = item.parentElement

    moveEl(actionType, parent, +childBlockInd)
  })
})