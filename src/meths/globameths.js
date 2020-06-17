export const gloabameths = {
  method: {
    open_singlePage (index) {
      console.log(index)
      this.$router.push({ path: `/singleView/${index}` })
    }
  }

}
