import React from 'react'
import './styles.css'
import numbersResolver from 'utils/numbersResolver'

const DisplayLed = ({ showNumber = 0 }) => {
  const ledNumber = numbersResolver(showNumber)

  return (
    <div className="displayLed">
      <svg
        width="69"
        height="15"
        viewBox="0 0 69 15"
        className={`displayLed__1 ${
          ledNumber.one ? 'displayLed__on' : 'displayLed__off'
        }`}
      >
        <path d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 4.11273e-06 63.8301 4.11273e-06H4.63794C2.89411 4.11273e-06 1.29303 0.589094 0.00726318 1.57233L14.269 14.8295" />
      </svg>
      <svg
        width="17"
        height="65"
        viewBox="0 0 17 65"
        className={`displayLed__2 ${
          ledNumber.two ? 'displayLed__on' : 'displayLed__off'
        }`}
      >
        <path d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z" />
      </svg>
      <svg
        width="17"
        height="65"
        viewBox="0 0 17 65"
        className={`displayLed__3 ${
          ledNumber.three ? 'displayLed__on' : 'displayLed__off'
        }`}
      >
        <path d="M0.624405 50.7207V9.51645L12.2954 0.769611C14.77 2.03407 16.4669 4.60029 16.4669 7.56917V59.3621C16.4669 61.1783 15.8299 62.8433 14.7721 64.1557L0.624405 50.7207Z" />
      </svg>
      <svg
        width="69"
        height="15"
        viewBox="0 0 69 15"
        className={`displayLed__4 ${
          ledNumber.four ? 'displayLed__on' : 'displayLed__off'
        }`}
      >
        <path d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z" />
      </svg>
      <svg
        width="16"
        height="65"
        viewBox="0 0 16 65"
        className={`displayLed__5 ${
          ledNumber.five ? 'displayLed__on' : 'displayLed__off'
        }`}
      >
        <path d="M1.71614 64.1944C0.644493 62.8799 0 61.2032 0 59.3741V7.58124C0 4.61236 1.69695 2.04614 4.17155 0.781677L15.8425 9.52852V51.064L1.71614 64.1944Z" />
      </svg>
      <svg
        width="16"
        height="65"
        viewBox="0 0 16 65"
        className={`displayLed__6 ${
          ledNumber.six ? 'displayLed__on' : 'displayLed__off'
        }`}
      >
        <path d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z" />
      </svg>
      <svg
        width="63"
        height="17"
        viewBox="0 0 63 17"
        className={`displayLed__7 ${
          ledNumber.seven ? 'displayLed__on' : 'displayLed__off'
        }`}
      >
        <path d="M51.4494 0.390018H11.0175L0.249847 8.32726L11.0175 16.2656H26.4329H36.034H51.4494L62.217 8.32726L51.4494 0.390018Z" />
      </svg>
    </div>
  )
}

export default DisplayLed
