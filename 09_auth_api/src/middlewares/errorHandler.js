function errorHandler (err, req, res, next) {
    const success = 'false';
    switch(err?.code)
    {
        //Common PG errors 
        case '23505':{
            const error = err.message||'Conflict. Duplication values error.';
            return res.status(409).json({ success, error });
        }
        case '23502':{
            const error = err.message||'Conflict. Not Null Violation.';
            return res.status(409).json({ success, error });
        }
        case '23000':{
            const error = err.message||'Conflict. Integrity Constraint Violation.';
            return res.status(409).json({ success, error });
        }
        case '22P02':{
            const error = err.message||'Conflict. Invalid Text Representation.';
            return res.status(409).json({ success, error });
        }
        case '42703':{
            const error = err.message||'Conflict. Undefined Column.';
            return res.status(409).json({ success, error });
        }
        case '22007':{
            const error = err.message||'Conflict. Invalid DateTime format.';
            return res.status(409).json({ success, error });
        }
        //default errors handling
        default :{
            const status = err.statusCode || 500;
            const message = err.message||'Internal server error';
            return res.status(status).json({success,message});
        }
    }
  }
  module.exports={
    errorHandler
  }