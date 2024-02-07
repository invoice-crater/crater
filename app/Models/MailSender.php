<?php

namespace Crater\Models;

use Crater\Http\Requests\MailSenderRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Config;

class MailSender extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    protected $casts = [
        'settings' => 'array',
        'is_default' => 'boolean'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function scopeWhereOrder($query, $orderByField, $orderBy)
    {
        $query->orderBy($orderByField, $orderBy);
    }

    public function scopeApplyFilters($query, array $filters)
    {
        $filters = collect($filters);

        if ($filters->get('orderByField') || $filters->get('orderBy')) {
            $field = $filters->get('orderByField') ? $filters->get('orderByField') : 'name';
            $orderBy = $filters->get('orderBy') ? $filters->get('orderBy') : 'desc';
            $query->whereOrder($field, $orderBy);
        }
    }

    public function scopePaginateData($query, $limit)
    {
        if ($limit == 'all') {
            return $query->get();
        }

        return $query->paginate($limit);
    }

    public function scopeWhereCompany($query)
    {
        $query->where('mail_senders.company_id', request()->header('company'));
    }

    public static function createFromRequest(MailSenderRequest $request)
    {
        $senderMail = self::create($request->getMailSenderPayload());

        if ($request->is_default) {
            $senderMail->removeOtherDefaultMailSenders($request);
        }

        return $senderMail;
    }

    public function updateFromRequest(MailSenderRequest $request)
    {
        $data = $request->getMailSenderPayload();

        $this->update($data);

        if ($request->is_default) {
            $this->removeOtherDefaultMailSenders($request);
        }

        return $this;
    }

    public static function setMailConfiguration($id, $check = null)
    {
        $mailSender = MailSender::find($id);

        $settings = $mailSender->settings;
        $settings['driver'] = $mailSender->driver;
        $settings['from'] = [
            'address' => $mailSender->from_address,
            'name' => $mailSender->from_name
        ];
        $settings['sendmail'] = config('mail.sendmail');
        $settings['markdown'] = config('mail.markdown');
        $settings['log_channel'] = config('mail.log_channel');

        Config::set('mail', $settings);

        if ($check) {
            return $mailSender;
        }

        return true;
    }

    public function removeOtherDefaultMailSenders($request) {
        MailSender::where('company_id', $request->header('company'))
            ->where('is_default', true)
            ->where('id', '<>', $this->id)
            ->update(['is_default' => false]);
    }
}
