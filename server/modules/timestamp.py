"""
MODULE
    timestamp.py

DESCRIPTION
    Simple POSIX timestamp generator and parser.
"""
from datetime import datetime as Datetime
from datetime import timedelta


def generate_timestamp(datetime: Datetime = None) -> int:
    """
    Generate timestamp.
    If datetime param is not provided, current datetime will be used.
    """
    if datetime is None:
        return int(Datetime.now().timestamp())
    return int(datetime.timestamp())

def read_timestamp(timestamp: int) -> Datetime:
    """ Read POSIX timestamp. """
    return Datetime.fromtimestamp(timestamp)

def read_input_date(date: str) -> Datetime:
    """ Convert YYYY-MM-DD format into Datetime object. """
    return Datetime.strptime(date, "%Y-%m-%d")

def convert_datetime_to_string(datetime: Datetime) -> str:
    """ Convert datetime object to YYYY-MM-DD format. """
    return datetime.strftime("%Y-%m-%d")
