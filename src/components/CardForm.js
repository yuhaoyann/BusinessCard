import "./CardForm.scss";

export default function CardForm(props) {
  return (
      <form onSubmit={props.handleSubmit} className="card-form">
        {props.onCancel && <p>Edit Card</p>}
        {!props.onCancel && <p>Create a New Card</p>}
        <table className="card-form-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <label>
                  <input
                    name="fullname"
                    type="text"
                    required="required"
                    defaultValue={props.card.fullname}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <label>
                  <input
                    name="email"
                    type="email"
                    defaultValue={props.card.email}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Photo</td>
              <td>
                <label>
                  <input
                    name="photo"
                    type="text"
                    defaultValue={props.card.photo}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Title</td>
              <td>
                <label>
                  <input
                    name="title"
                    type="text"
                    defaultValue={props.card.title}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Company</td>
              <td>
                <label>
                  <input
                    name="company"
                    type="text"
                    defaultValue={props.card.company}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                <label>
                  <input
                    name="phone"
                    type="tel"
                    defaultValue={props.card.phone}
                    onChange={props.handleChange}
                  />
                </label>
            </td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td>
                <label>
                  <input
                    name="github"
                    type="text"
                    defaultValue={props.card.github}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>
                <label>
                  <input
                    name="linkedin"
                    type="text"
                    defaultValue={props.card.linkedin}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>
                <label>
                  <input
                    name="facebook"
                    type="text"
                    defaultValue={props.card.facebook}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td>
                <label>
                  <input
                    name="instagram"
                    type="text"
                    defaultValue={props.card.instagram}
                    onChange={props.handleChange}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>
                <label>
                  <input
                    name="bio"
                    type="text"
                    defaultValue={props.card.bio}
                    onChange={props.handleChange}
                  />
              </label>
            </td>
            </tr>
          </tbody>
        </table>
        <div className="card-form-button">
          <table>
            <tbody>
              <tr>
                <input className="card-form-submit" type="submit" value="Submit" />
              </tr>
              <tr>
                {props.onCancel && (
                  <button className="card-form-cancel" onClick={props.onCancel}>Cancel</button>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </form>
  )
}