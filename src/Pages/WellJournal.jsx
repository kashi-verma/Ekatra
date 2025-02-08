const WellJournal = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-white">
      {/* Left Side - Video */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://cdn.shopify.com/videos/c/o/v/558552b02ac44a3788b8b7c5d6c57dc4.mp4"
        ></video>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-gray-800">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">TIPS TO GUIDE YOUR JOURNEY THROUGH THIS JOURNAL</h1>
        <ul className="space-y-4">
          <li>
            <strong className="text-blue-400">BE PRESENT DURING YOUR ENTRIES:</strong>
            <p>Find a quiet space, turn off distractions, and be fully present as you write. The more present you are, the more impactful your journaling will be.</p>
          </li>
          <li>
            <strong className="text-blue-400">VENT FREELY:</strong>
            <p>Utilize the Vent it Out pages whenever you need to release pent-up emotions. These pages are your safe space for unfiltered thoughts and personal expression.</p>
          </li>
          <li>
            <strong className="text-blue-400">REVISIT AND REFLECT:</strong>
            <p>Occasionally go back and read past entries to see your growth and patterns. This reflection can inspire new perspectives and build self-awareness.</p>
          </li>
          <li>
            <strong className="text-blue-400">PERSONALIZE YOUR EXPERIENCE:</strong>
            <p>Add your own creative touches to your journal. Doodle, use colored pens, or include stickers. This personalization makes it feel like a true reflection of you.</p>
          </li>
          <li>
            <strong className="text-blue-400">CELEBRATE PROGRESS REGULARLY:</strong>
            <p>Use the weekly and monthly check-ins to not just track progress, but celebrate it. Small wins matter, and acknowledging them boosts your motivation.</p>
          </li>
          <li>
            <strong className="text-blue-400">BE GENTLE WITH YOURSELF:</strong>
            <p>If some days you only manage a few words or doodles, that is okay. Embrace whatever comes out, and remember that it is all part of the journey.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WellJournal;
