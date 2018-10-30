

const logging = require('clean_logs');
const logger = logging.logger;

logger.info = logger.debug;
window.console = logger;


