export default():JSX.Element=>{
    return (
        <>
            <label className="block mt-3 mb-3" htmlFor="profile-picture">Upload a profile picture: <input className="text-black outline-blue-950 pl-1 pr-1 rounded" id="profile-picture" type="file" /></label>
            <label className="block mt-3 mb-3" htmlFor="age">Input your age (years): <input  className="outline-blue-950 pl-1 pr-1 rounded-lg bg-input-textarea-color border-input-textarea-color border border-solid focus:border-b-white focus focus:outline-none" id="age" type="number" min="13" max="120" /></label>
            <label className="block mt-3 mb-3" htmlFor="referrer">How did you hear about us?
            <select  className="text-black outline-blue-950 pl-1 pr-1 rounded" id="referrer">
                <option value="">(select one)</option>
                <option value="1">freeCodeCamp News</option>
                <option value="2">freeCodeCamp YouTube Channel</option>
                <option value="3">freeCodeCamp Forum</option>
                <option value="4">Other</option>
            </select>
            </label>
            <label className="block mt-3 mb-3" htmlFor="bio">Provide a bio:
            <textarea id="bio" className="outline-blue-950 pl-1 pr-1 rounded m-0 mt-2.5  w-full  bg-input-textarea-color border-input-textarea-color border border-solid" rows={3} cols={30} placeholder="I like coding on the beach..."></textarea>
            </label>
        </>
    );
};