/**
 * Async handler utility to wrap asynchronous functions.
 * It eliminates the need for repetitive try-catch blocks in controllers.
 */

/*export const asyncHandler=(fn)=> (req,res,next)=>
  Promise.resolve(fn(req,res,next)).catch(next)
*/


 
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };