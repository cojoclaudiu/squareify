// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (request, result) => {
  result.status(200).json({ name: 'John Doe' });
};
