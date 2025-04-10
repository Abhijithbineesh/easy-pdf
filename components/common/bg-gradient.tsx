export default function BgGradient(){


    return(
    <div className="fixed inset-0 -z-10 w-full h-full">
      {/* Light gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-100 to-blue-200" />

      {/* Soft radial effects */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-300/40 to-transparent rounded-full blur-3xl"
      />

      <div
        className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-gradient-radial from-blue-200/40 to-transparent rounded-full blur-2xl"
      />
    </div>
    )
}