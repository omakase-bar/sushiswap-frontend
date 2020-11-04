import React from 'react'
import cn from 'classnames'

interface Container {
  dottedBG?: boolean
  children: JSX.Element | JSX.Element[] | string
  className?: string
}
const Container = ({ dottedBG: dotted, children, className }: Container) => (
  <div className={cn('app-container', className)}>
    <style jsx>{`
      .app-container {
        ${dotted
          ? `
          background-image: radial-gradient(#feebc8 2.5px, transparent 2.5px), radial-gradient(#F6AD55 1px, transparent 1px);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
          background-color: #FAFAFA;
        `
          : 'background-color: #EAEAEA;'}
        width: 100%;
        margin: 0 auto;
      }
    `}</style>
    <div className="container mx-auto max-w-6xl p-6 md:p-4">{children}</div>
  </div>
)

export default Container
