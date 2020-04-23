import React from "react"
import Layout from "../components/layout"
import InViewMonitor from "react-inview-monitor"

const BlogPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="animated animated.delay-1s fadeInUp">Blog</h1>
        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
        >
          <section className="animated animated.delay-2s fadeInUp">
            <h2>Tutorial</h2>
            <p>
              Laborum mollit dolore do sunt.Lorem nostrud sit mollit id eiusmod
              eiusmod est.
            </p>
            <p>
              Commodo commodo fugiat sit anim pariatur aliqua tempor et
              reprehenderit Lorem sit enim elit. Sint ea veniam voluptate do
              sint do aute aliqua minim commodo commodo mollit. Laborum fugiat
              fugiat aliqua deserunt in officia amet non duis do mollit
              reprehenderit. Enim proident aliquip do incididunt ut id et magna
              Lorem ex voluptate et et nisi.Sint labore incididunt deserunt
              proident aute cupidatat aliqua tempor enim. Tempor excepteur
              consequat occaecat aliqua veniam do minim sunt sint occaecat
              incididunt pariatur excepteur consequat. Aute eiusmod voluptate
              reprehenderit exercitation elit nisi ex reprehenderit eu laboris
              laboris enim officia laborum. Tempor ullamco elit commodo et
              commodo incididunt elit cillum sint labore.Voluptate ea do tempor
              mollit sint minim dolor dolore. Exercitation enim sit irure enim
              labore dolore do. Aute ea consectetur tempor commodo ex consequat
              Lorem. Aute cillum mollit dolor amet ut quis cupidatat voluptate
              anim. Anim sint ad veniam deserunt sit anim aliqua. Eiusmod
              nostrud ut laboris do ea. Magna veniam dolore nisi adipisicing.
            </p>
          </section>
        </InViewMonitor>
        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
        >
          <section className="animated animated.delay-2s fadeInUp">
            <h2>Tutorial</h2>
            <p>
              Laborum mollit dolore do sunt.Lorem nostrud sit mollit id eiusmod
              eiusmod est.
            </p>
            <p>
              Commodo commodo fugiat sit anim pariatur aliqua tempor et
              reprehenderit Lorem sit enim elit. Sint ea veniam voluptate do
              sint do aute aliqua minim commodo commodo mollit. Laborum fugiat
              fugiat aliqua deserunt in officia amet non duis do mollit
              reprehenderit. Enim proident aliquip do incididunt ut id et magna
              Lorem ex voluptate et et nisi.Sint labore incididunt deserunt
              proident aute cupidatat aliqua tempor enim. Tempor excepteur
              consequat occaecat aliqua veniam do minim sunt sint occaecat
              incididunt pariatur excepteur consequat. Aute eiusmod voluptate
              reprehenderit exercitation elit nisi ex reprehenderit eu laboris
              laboris enim officia laborum. Tempor ullamco elit commodo et
              commodo incididunt elit cillum sint labore.Voluptate ea do tempor
              mollit sint minim dolor dolore. Exercitation enim sit irure enim
              labore dolore do. Aute ea consectetur tempor commodo ex consequat
              Lorem. Aute cillum mollit dolor amet ut quis cupidatat voluptate
              anim. Anim sint ad veniam deserunt sit anim aliqua. Eiusmod
              nostrud ut laboris do ea. Magna veniam dolore nisi adipisicing.
            </p>
          </section>
        </InViewMonitor>
        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
        >
          <section className="animated animated.delay-2s fadeInUp">
            <h2>Tutorial</h2>
            <p>
              Laborum mollit dolore do sunt.Lorem nostrud sit mollit id eiusmod
              eiusmod est.
            </p>
            <p>
              Commodo commodo fugiat sit anim pariatur aliqua tempor et
              reprehenderit Lorem sit enim elit. Sint ea veniam voluptate do
              sint do aute aliqua minim commodo commodo mollit. Laborum fugiat
              fugiat aliqua deserunt in officia amet non duis do mollit
              reprehenderit. Enim proident aliquip do incididunt ut id et magna
              Lorem ex voluptate et et nisi.Sint labore incididunt deserunt
              proident aute cupidatat aliqua tempor enim. Tempor excepteur
              consequat occaecat aliqua veniam do minim sunt sint occaecat
              incididunt pariatur excepteur consequat. Aute eiusmod voluptate
              reprehenderit exercitation elit nisi ex reprehenderit eu laboris
              laboris enim officia laborum. Tempor ullamco elit commodo et
              commodo incididunt elit cillum sint labore.Voluptate ea do tempor
              mollit sint minim dolor dolore. Exercitation enim sit irure enim
              labore dolore do. Aute ea consectetur tempor commodo ex consequat
              Lorem. Aute cillum mollit dolor amet ut quis cupidatat voluptate
              anim. Anim sint ad veniam deserunt sit anim aliqua. Eiusmod
              nostrud ut laboris do ea. Magna veniam dolore nisi adipisicing.
            </p>
          </section>
        </InViewMonitor>
      </div>
    </Layout>
  )
}

export default BlogPage
