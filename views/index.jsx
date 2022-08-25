const React = require('react')
const Default = require('./layouts/default')

function Index({ breads, bakers, title }) {
  return (
    <Default>
      <h2>Index Page</h2>
      <div className="backButton">
        <a href="/breads"><button>Go back to the index</button></a>
      </div>
      <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
      </div>
      <ul>{breads.map((bread, index) => {
        return (
          <li key={bread._id}>
            <a href={`/breads/${bread._id}`}>
              {bread.name}
            </a>
          </li>

        )
      })}
      </ul>
      <h3>Bakers</h3>
      <ul>
        {
          bakers.map((baker) => {
            return (
              <li key={baker._id}>
                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
              </li>
            )
          })
        }
      </ul>
    </Default>
  )
}

module.exports = Index




