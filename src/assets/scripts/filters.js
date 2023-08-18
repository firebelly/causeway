// filters.js

export default {
    uppercase(val) {
      if (typeof val === "string") {
        return val.toUpperCase();
      }
      return val;
    }, 
    lowercase(val) {
      if (typeof val === "string") {
        return val.toLowerCase()
      }
    },
    titlecase(val) {
        if (typeof val === "string") {
            return val.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        }
    },
    slugify(val) {
        if (typeof val === "string") {
            return val.toLowerCase().split(' ').join('-');
        }
    }
};