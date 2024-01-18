import swell from 'swell-js'

const options = {
    camelCase: false,
}

swell.init(process.env.NEXT_PUBLIC_SWELL_STORE, process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY, options)

export { swell }