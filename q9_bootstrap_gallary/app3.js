$(() => {
    $('#grid-2').on('click', () => {
        $('.gallery > div').removeClass()
        $('.gallery > div').addClass('col-sm-6')
    })
    $('#grid-4').on('click', () => {
        $('.gallery > div').removeClass()
        $('.gallery > div').addClass('col-md-3')
    })
    $('#reset').on('click', () => {
        $('.gallery > div').removeClass()
        $('.gallery > div').addClass('col-sm-6')
        $('.gallery > div').addClass('col-md-3')
    })
})