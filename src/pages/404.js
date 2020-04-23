import React from "react"
import Layout from "../components/layout"
const PageNotFound = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-xs-12">
          <h1 className="center-xs">Erreur 404 !</h1>
          <p className="center-xs">
            Wooooops ! Cette page n'existe pas ou plus...
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default PageNotFound
