import styles from "./Form.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../../config.js";

export default function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = config.serverUrl + "/api/posts/create";

    const formData = new FormData(e.target);
    const { email, query, destination } = Object.fromEntries(formData);

    const data = {
      email,
      query,
      destination,
    };
    // You can perform actions with the form data here, e.g., submit it to an API
    console.log("Form data submitted:");
    console.log(data);
    try {
      const res = await axios.post(url, data);

      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Well done!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Everything went well");

        // Delay the page refresh for a moment to allow SweetAlert2 to display
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Adjust the delay time as needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles["main"]}>
      <div className={styles["form"]}>
        <h1>Share your thoughts</h1>
        <form id="myForm" onSubmit={handleSubmit}>
          <input name="email" placeholder="Your email" type="email" />
          <textarea
            name="query"
            rows="10"
            cols="40"
            placeholder="Text"
          ></textarea>
          <select name="destination">
            <option selected disabled>
              Your destination...
            </option>
            <option>Mercury</option>
            <option>Venus</option>
            <option>Earth</option>
            <option>Mars</option>
            <option>Jupiter</option>
            <option>Saturn</option>
            <option>Uranus</option>
            <option>Neptune</option>
            <option>Pluto</option>
            <option>Sun Flyby</option>
          </select>

          <button>Contact Us</button>
        </form>
      </div>
    </main>
  );
}
