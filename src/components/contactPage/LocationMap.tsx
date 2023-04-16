import classes from "./LocationMap.module.css";

const LocationMap = () => {
  return (
    <section className={classes["section-map"]}>
      <p className={classes["title"]}>Ven y conócenos</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4394284398827!2d-98.26375222394437!3d19.00034875434152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb92e4843e1ed%3A0x4c7cd9dc1f354631!2sU%20Smile!5e0!3m2!1sen!2smx!4v1681092124573!5m2!1sen!2smx"
        className={classes["map"]}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default LocationMap;
